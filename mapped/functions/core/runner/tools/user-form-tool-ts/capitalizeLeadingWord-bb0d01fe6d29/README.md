# `capitalizeLeadingWord`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-form-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726296-726300](../../../../../../../reference/runtime/host-main.cjs#L726296-L726300) | `FunctionDeclaration` | não | `title` |
| [evaluation:560911-560915](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560911-L560915) | `FunctionDeclaration` | não | `title` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726296-726300](../../../../../../../reference/runtime/host-main.cjs#L726296-L726300) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:560911-560915](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560911-L560915) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:726296

Chamadas escritas diretamente neste corpo: `.toUpperCase`, `leadingWord.toLowerCase`, `title.charAt`, `title.slice`, `title.split`.

SHA-256 do trecho: `dcfb5ba03811802bbc95de73ad5df50ba57be236fc6085aeb27e35d1700f5f56`.

### evaluation:560911

Chamadas escritas diretamente neste corpo: `.toUpperCase`, `leadingWord.toLowerCase`, `title.charAt`, `title.slice`, `title.split`.

SHA-256 do trecho: `dcfb5ba03811802bbc95de73ad5df50ba57be236fc6085aeb27e35d1700f5f56`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
