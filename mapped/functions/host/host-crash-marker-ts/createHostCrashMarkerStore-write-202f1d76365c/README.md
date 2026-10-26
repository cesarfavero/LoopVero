# `createHostCrashMarkerStore/write`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/host-crash-marker.ts` · [README do módulo](../../../../modules/host/host-crash-marker-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:471527-471534](../../../../../reference/runtime/host-main.cjs#L471527-L471534) | `ArrowFunctionExpression` | sim | `marker17` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471527-471534](../../../../../reference/runtime/host-main.cjs#L471527-L471534) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:471527

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `hasErrnoCode`.

SHA-256 do trecho: `e3e54e14e29926e24e2c0834d4349a65e8aef2c481523bc8adbf38fa2559c7bf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
