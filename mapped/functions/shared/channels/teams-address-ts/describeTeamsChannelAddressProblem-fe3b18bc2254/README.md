# `describeTeamsChannelAddressProblem`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/channels/teams-address.ts` · [README do módulo](../../../../../modules/shared/channels/teams-address-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754819-754842](../../../../../../reference/runtime/host-main.cjs#L754819-L754842) | `FunctionDeclaration` | não | `address` |
| [evaluation:538171-538194](../../../../../../reference/runtime/sand-eval-runner.cjs#L538171-L538194) | `FunctionDeclaration` | não | `address` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754819-754842](../../../../../../reference/runtime/host-main.cjs#L754819-L754842) | 5 | 0 | 0 | 6 | 2 | 2 |
| [evaluation:538171-538194](../../../../../../reference/runtime/sand-eval-runner.cjs#L538171-L538194) | 5 | 0 | 0 | 6 | 2 | 2 |

### host:754819

Chamadas escritas diretamente neste corpo: `.startsWith`, `address.trim`, `parseChannelAddress`, `parseTeamsChatTarget`, `trimmed.toLowerCase`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `2d91c09d4d61ced1367fbae1cc7a6ae17d89fd7fee06c6f0663c104e714e86e0`.

### evaluation:538171

Chamadas escritas diretamente neste corpo: `.startsWith`, `address.trim`, `parseChannelAddress`, `parseTeamsChatTarget`, `trimmed.toLowerCase`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `b4432197cfc2f0d4e66c6052f40677713576d5bb9cfa1c663d6d56abb053c3cf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
