# `authorizeSandSecureFillDomain`

[Componente: browser-computer](../../components/browser-computer/README.md) · [Índice](../../README.md)

**Fonte primária:** [host-main.cjs:766673-766716](../../../reference/runtime/host-main.cjs#L766673-L766716). Análise estática do snapshot original; nomes preservados do bundle.

## Contrato

`authorizeSandSecureFillDomain(metadata,target,options={})` valida o destino de um preenchimento seguro e retorna uma decisão com classificação de frame. Não recebe nem divulga o valor secreto para o modelo nessa função.

## Algoritmo

Parseia URL do frame e da página superior como sites HTTPS. Classifica frame como top, same_origin ou cross_origin. Se algum site não é válido, rejeita com rule scheme. Calcula domínio registrável ou hostname superior. A exceção anySite exige opção habilitada e tipo de valor compatível. Sem exceção, pelo menos um domínio de metadata deve corresponder ao site superior; caso contrário rejeita top_origin.

## Nuance importante

Cross-origin é uma classificação; não causa rejeição automática nessa função. Regras de cartão são separadas, com autorização das URLs superior/frame. Tipos de campo também passam por `sandSecureFillFieldAccepts`: contentEditable é recusado, senha requer input password, e textarea é aceito apenas para valores originados do vault.

## Resultado de engenharia

Não simplificar a regra para “qualquer iframe é proibido” ou “qualquer HTTPS é permitido”. A política é função do metadata, do tipo do valor, da página superior e de gates. A execução efetiva e o armazenamento do segredo pertencem às portas de secure fill, fora deste helper.
