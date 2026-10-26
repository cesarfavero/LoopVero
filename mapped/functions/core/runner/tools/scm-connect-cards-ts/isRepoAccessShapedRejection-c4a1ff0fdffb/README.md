# `isRepoAccessShapedRejection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/scm-connect-cards.ts` · [README do módulo](../../../../../../modules/core/runner/tools/scm-connect-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509219-509225](../../../../../../../reference/runtime/host-main.cjs#L509219-L509225) | `FunctionDeclaration` | não | `rejection` |
| [evaluation:556944-556950](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556944-L556950) | `FunctionDeclaration` | não | `rejection` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509219-509225](../../../../../../../reference/runtime/host-main.cjs#L509219-L509225) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556944-556950](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556944-L556950) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509219

Chamadas escritas diretamente neste corpo: `/deleted, renamed, made private|not linked for this workspace|do(?:es)? not have access|not accessible|no .*access token found with access|removed from the .* installation|permission denied/i.test`, `/repositor/i.test`.

SHA-256 do trecho: `9873d470fc94e0314704f4c0eda1c12756e3a48c4cf7fd6cf3c8f665c4eca86b`.

### evaluation:556944

Chamadas escritas diretamente neste corpo: `/deleted, renamed, made private|not linked for this workspace|do(?:es)? not have access|not accessible|no .*access token found with access|removed from the .* installation|permission denied/i.test`, `/repositor/i.test`.

SHA-256 do trecho: `9873d470fc94e0314704f4c0eda1c12756e3a48c4cf7fd6cf3c8f665c4eca86b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
