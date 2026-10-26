# `createSendToAgentTool`

[Componente: integrations](../../components/integrations/README.md) · [Índice](../../README.md)

**Fonte primária:** [host-main.cjs:757386-757434](../../../reference/runtime/host-main.cjs#L757386-L757434). Análise estática do snapshot original; nomes preservados do bundle.

## Contrato

`createSendToAgentTool(deps)` cria a ferramenta de mensagem a outro bot persistente. É distinta de criar um subagente e de enviar mensagem a uma pessoa.

## Algoritmo

Valida pelo schema, obtém o ID próprio e recusa autoenvio. Resolve task thread opcional e anexos de imagem. Associa um delivery report à chamada. Chama a porta `sendToAgent` com ID de destino, mensagem, imagens quando existentes, prioridade e task opcional. Captura falha para registrar e relança. Retorno legado em string é devolvido direto; retorno estruturado registra destino, delivery e categoria de falha e devolve ack.

## Prioridade

O schema exige `priority`: true significa trabalho acionável que acorda o destino; false significa informação guardada para o próximo turno. Grupos têm semântica própria declarada. O wrapper transporta a prioridade, mas não implementa sozinho a fila do destinatário.

## Identidade e estado

A validação de task evita enviar para uma thread inexistente/concluída fora da exceção permitida. Uma task documental apenas correlaciona o fluxo; não muda o ID do bot destinatário. O sucesso da porta, o ack e a resposta futura do destinatário são eventos diferentes.

## Limite

Entrega remota, retries e idempotência precisam ser comprovados na porta. A função não consulta histórico para resolver uma pessoa por nome nem autoriza comunicação externa em nome do usuário.
