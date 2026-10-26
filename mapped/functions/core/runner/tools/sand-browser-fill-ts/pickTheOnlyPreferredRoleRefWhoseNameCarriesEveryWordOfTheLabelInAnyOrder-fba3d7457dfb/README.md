# `pickTheOnlyPreferredRoleRefWhoseNameCarriesEveryWordOfTheLabelInAnyOrder`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727005-727019](../../../../../../../reference/runtime/host-main.cjs#L727005-L727019) | `FunctionDeclaration` | não | `lines2, needle, preferredRole` |
| [evaluation:561616-561630](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561616-L561630) | `FunctionDeclaration` | não | `lines2, needle, preferredRole` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727005-727019](../../../../../../../reference/runtime/host-main.cjs#L727005-L727019) | 5 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:561616-561630](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561616-L561630) | 5 | 1 | 0 | 4 | 0 | 0 |

### host:727005

Chamadas escritas diretamente neste corpo: `SNAPSHOT_LINE_NAME_PATTERN.exec`, `SNAPSHOT_LINE_ROLE_PATTERN.exec`, `SNAPSHOT_REF_PATTERN.exec`, `labelWords.every`, `new Set`, `wordsOf2`, `wordsOfLabelAfterCollapsingEmailAddressAndPhoneNumber`.

Alvos de atribuição ou incremento: `only`.

SHA-256 do trecho: `79982cd334fbdc753511bf63c626903f741b961a7239da358dd33e3ce21015aa`.

### evaluation:561616

Chamadas escritas diretamente neste corpo: `SNAPSHOT_LINE_NAME_PATTERN.exec`, `SNAPSHOT_LINE_ROLE_PATTERN.exec`, `SNAPSHOT_REF_PATTERN.exec`, `labelWords.every`, `new Set`, `wordsOf3`, `wordsOfLabelAfterCollapsingEmailAddressAndPhoneNumber`.

Alvos de atribuição ou incremento: `only`.

SHA-256 do trecho: `1b71c2bfa033ff25295d287fcde20d3299ac40f60a7f4bc584d7f608b1da6a95`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
