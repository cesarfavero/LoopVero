# `runHostMain/beforeResumeOwnership/isProxyEnabled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/main.ts` · [README do módulo](../../../../modules/host/main-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:787009-787009](../../../../../reference/runtime/host-main.cjs#L787009-L787009) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:787009-787009](../../../../../reference/runtime/host-main.cjs#L787009-L787009) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:787009 usa retorno implícito de arrow function.

### host:787009

Chamadas escritas diretamente neste corpo: `webAuthnProxyGate.isEnabled`.

SHA-256 do trecho: `4a0f58c9ecb77d418fce5e0bb81be2cb1d161bca70c18de0294a9685f4a2bc89`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
