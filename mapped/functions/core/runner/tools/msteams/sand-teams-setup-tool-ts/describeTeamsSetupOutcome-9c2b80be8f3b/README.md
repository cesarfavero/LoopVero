# `describeTeamsSetupOutcome`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/msteams/sand-teams-setup-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/msteams/sand-teams-setup-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781227-781249](../../../../../../../../reference/runtime/host-main.cjs#L781227-L781249) | `FunctionDeclaration` | não | `outcome, action` |
| [evaluation:581574-581596](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581574-L581596) | `FunctionDeclaration` | não | `outcome, action` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781227-781249](../../../../../../../../reference/runtime/host-main.cjs#L781227-L781249) | 14 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:581574-581596](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581574-L581596) | 14 | 0 | 0 | 7 | 0 | 0 |

### host:781227

Chamadas escritas diretamente neste corpo: `.join`, `inTenant`, `outcome.installedTeams.map`.

SHA-256 do trecho: `77eed5ce884fabfb5c5697a2f67eb528195ff22a30aaf854340143da806e8afe`.

### evaluation:581574

Chamadas escritas diretamente neste corpo: `.join`, `inTenant`, `outcome.installedTeams.map`.

SHA-256 do trecho: `77eed5ce884fabfb5c5697a2f67eb528195ff22a30aaf854340143da806e8afe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
