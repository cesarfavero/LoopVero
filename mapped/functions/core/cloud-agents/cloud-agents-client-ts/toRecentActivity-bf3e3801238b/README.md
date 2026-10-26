# `toRecentActivity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:512552-512566](../../../../../../reference/runtime/host-main.cjs#L512552-L512566) | `FunctionDeclaration` | não | `detailed, projectNamesById` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512552-512566](../../../../../../reference/runtime/host-main.cjs#L512552-L512566) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:512552

Chamadas escritas diretamente neste corpo: `activityProject`, `boundedSingleLine`, `composerLastActivityAtMs`, `userMessage`.

SHA-256 do trecho: `a611df2a9b4d8501cd911ee8e1ef9ac4a7367842240f0ca76e7b670017133bdd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
