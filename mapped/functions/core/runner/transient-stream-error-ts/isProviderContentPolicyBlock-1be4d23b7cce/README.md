# `isProviderContentPolicyBlock`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/transient-stream-error.ts` · [README do módulo](../../../../../modules/core/runner/transient-stream-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736241-736243](../../../../../../reference/runtime/host-main.cjs#L736241-L736243) | `FunctionDeclaration` | não | `error64` |
| [evaluation:589922-589924](../../../../../../reference/runtime/sand-eval-runner.cjs#L589922-L589924) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736241-736243](../../../../../../reference/runtime/host-main.cjs#L736241-L736243) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:589922-589924](../../../../../../reference/runtime/sand-eval-runner.cjs#L589922-L589924) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:736241

Chamadas escritas diretamente neste corpo: `hasProviderContentPolicyBlock`, `new Set`.

SHA-256 do trecho: `a3e6fe916cdb739f4f29c238ae03ffa3d6d087d97b6c7bf1cbdbb51023d9a640`.

### evaluation:589922

Chamadas escritas diretamente neste corpo: `hasProviderContentPolicyBlock`, `new Set`.

SHA-256 do trecho: `39730c41cdf5c202be2699f1fc31d5d21921b5f5ede64d934ea59b1eb4df2c02`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
