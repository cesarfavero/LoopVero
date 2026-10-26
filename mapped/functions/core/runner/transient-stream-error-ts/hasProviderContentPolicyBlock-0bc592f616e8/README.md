# `hasProviderContentPolicyBlock`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/transient-stream-error.ts` · [README do módulo](../../../../../modules/core/runner/transient-stream-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736244-736257](../../../../../../reference/runtime/host-main.cjs#L736244-L736257) | `FunctionDeclaration` | não | `error64, seen` |
| [evaluation:589925-589938](../../../../../../reference/runtime/sand-eval-runner.cjs#L589925-L589938) | `FunctionDeclaration` | não | `error63, seen` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736244-736257](../../../../../../reference/runtime/host-main.cjs#L736244-L736257) | 5 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:589925-589938](../../../../../../reference/runtime/sand-eval-runner.cjs#L589925-L589938) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:736244

Chamadas escritas diretamente neste corpo: `Array.isArray`, `SERVER_PROVIDER_CONTENT_POLICY_BLOCK_ERROR_NAMES.has`, `fields3.errors.some`, `hasProviderContentPolicyBlock`, `seen.add`, `seen.has`.

SHA-256 do trecho: `26e6045a0146088daea8f6c40bf343df4a323d6e067bf2dbc71f138b10be251d`.

### evaluation:589925

Chamadas escritas diretamente neste corpo: `Array.isArray`, `SERVER_PROVIDER_CONTENT_POLICY_BLOCK_ERROR_NAMES.has`, `fields3.errors.some`, `hasProviderContentPolicyBlock`, `seen.add`, `seen.has`.

SHA-256 do trecho: `8087ae25f08489ebe5cc037205850d6ba9de35be2662cbb7bc18f0061fde7a64`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
