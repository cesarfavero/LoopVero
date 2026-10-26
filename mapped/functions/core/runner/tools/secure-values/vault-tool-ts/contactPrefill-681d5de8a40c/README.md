# `contactPrefill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/vault-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767944-767958](../../../../../../../../reference/runtime/host-main.cjs#L767944-L767958) | `FunctionDeclaration` | não | `contact` |
| [evaluation:563460-563474](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563460-L563474) | `FunctionDeclaration` | não | `contact` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767944-767958](../../../../../../../../reference/runtime/host-main.cjs#L767944-L767958) | 5 | 1 | 0 | 1 | 1 | 0 |
| [evaluation:563460-563474](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563460-L563474) | 5 | 1 | 0 | 1 | 1 | 0 |

### host:767944

Chamadas escritas diretamente neste corpo: `canonicalVaultCountryCode`, `new SandToolInputError`, `vaultContactFormValueProblem`.

Alvos de atribuição ou incremento: `values.default_shipping`, `values[computed]`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `ba92702c65c7a166401f99347fb7a136fd7675214d20b696dead80d196244947`.

### evaluation:563460

Chamadas escritas diretamente neste corpo: `canonicalVaultCountryCode`, `new SandToolInputError`, `vaultContactFormValueProblem`.

Alvos de atribuição ou incremento: `values.default_shipping`, `values[computed]`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `ba92702c65c7a166401f99347fb7a136fd7675214d20b696dead80d196244947`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
