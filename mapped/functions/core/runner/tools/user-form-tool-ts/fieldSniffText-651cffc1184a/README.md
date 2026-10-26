# `fieldSniffText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-form-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726178-726180](../../../../../../../reference/runtime/host-main.cjs#L726178-L726180) | `FunctionDeclaration` | não | `field` |
| [evaluation:560796-560798](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560796-L560798) | `FunctionDeclaration` | não | `field` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726178-726180](../../../../../../../reference/runtime/host-main.cjs#L726178-L726180) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560796-560798](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560796-L560798) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726178

Chamadas escritas diretamente neste corpo: `.replace`, `new RegExp`.

SHA-256 do trecho: `128bd10f2e90dd74bd51f5f211f19fafb757beb5aafd30e55538b806cba5cebf`.

### evaluation:560796

Chamadas escritas diretamente neste corpo: `.replace`, `new RegExp`.

SHA-256 do trecho: `128bd10f2e90dd74bd51f5f211f19fafb757beb5aafd30e55538b806cba5cebf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
