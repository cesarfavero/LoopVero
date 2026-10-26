# `buildTurnTools`

[Componente: tools](../../components/tools/README.md) · [Índice](../../README.md)

**Fonte primária:** [sand-eval-runner.cjs:582666-582732](../../../reference/runtime/sand-eval-runner.cjs#L582666-L582732). Análise estática do snapshot original; nomes preservados do bundle.

## Assinatura e finalidade

`buildTurnTools(host, turn, props)` é a composição do conjunto de ferramentas de um turno. A implementação completa recuperada está no bundle de avaliação; não é prova de que o host BOX aposentado aceite esse turno.

## Algoritmo

Resolve a política; retorna conjunto vazio se não há ferramentas. Uma passagem especial de compartilhamento tem caminho próprio. No caminho normal cria contexto, executa builders e acrescenta dispositivos. Aplica recusas readonly e encaminhamento legado. A seguir coloca ferramentas no contexto conforme manifesto, retenção atrás de lookup, exceções de canvas ou hints. Por fim, envolve handoffs e timeouts e chama `fencedToolSet`.

## Entradas concretas

`host` fornece portas, gates, tipo de agente, revisão e capacidades. `turn` fornece sessão, controladores e prefetch de subagentes. `props` fornece state handler e resource accessor. Se a política permite uma ferramenta mas sua porta não existe, o builder pode retornar nada.

## Retorno e falhas

Retorna `ToolSetHandle`. Builders desconhecidos/que produzem nomes não declarados são filtrados e geram métrica em `runTurnToolBuilders`. Invocação dinâmica recebe wrapper próprio, incluindo timeout, observação e cancelamento de pausa MCP; ferramentas normais recebem timeout pelo nome e classe do runner. Construir o toolset não executa efeitos do usuário.

## Invariante de engenharia

A documentação do prompt deve refletir o conjunto montado, não apenas flags. O runtime possui `sandMountedTurnTools` para consultar ferramentas executáveis/visíveis. Uma implementação que apenas concatene todas as ferramentas perde esse controle.
