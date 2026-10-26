# `bindSecureValuesUserFormToLiveSite`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-form-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726569-726586](../../../../../../../reference/runtime/host-main.cjs#L726569-L726586) | `FunctionDeclaration` | sim | `ctx, form, liveBrowserHost` |
| [evaluation:561184-561201](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561184-L561201) | `FunctionDeclaration` | sim | `ctx, form, liveBrowserHost` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726569-726586](../../../../../../../reference/runtime/host-main.cjs#L726569-L726586) | 3 | 0 | 1 | 1 | 2 | 0 |
| [evaluation:561184-561201](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561184-L561201) | 3 | 0 | 1 | 1 | 2 | 0 |

### host:726569

Chamadas escritas diretamente neste corpo: `form.domains.find`, `liveBrowserHost`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `57476439adc09b07b4c83d6f9075a6ba75fe75c4aa992a253964bbd7cad32868`.

### evaluation:561184

Chamadas escritas diretamente neste corpo: `form.domains.find`, `liveBrowserHost`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `9e36a07a278e477b7b08fcac50ce0cb6c73f06bf8cbf91238585ede0f00325c2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
