# `startLocalExec/registerProvider`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/local-exec/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/local-exec/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682180-682184](../../../../../../../reference/runtime/host-main.cjs#L682180-L682184) | `ArrowFunctionExpression` | não | `send` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682180-682184](../../../../../../../reference/runtime/host-main.cjs#L682180-L682184) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682180

Chamadas escritas diretamente neste corpo: `bridge.registerProvider`, `context2.host.events.emit`.

SHA-256 do trecho: `63110583eda5dccb12e3ef9e59169d6c3a50d8b93b99fbfc614a0070658600ef`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
