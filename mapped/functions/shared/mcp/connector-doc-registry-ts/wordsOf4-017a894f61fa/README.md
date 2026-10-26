# `wordsOf4`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:573706-573709](../../../../../../reference/runtime/sand-eval-runner.cjs#L573706-L573709) | `FunctionDeclaration` | não | `name18, splitCamelCase` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:573706-573709](../../../../../../reference/runtime/sand-eval-runner.cjs#L573706-L573709) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:573706

Chamadas escritas diretamente neste corpo: `.filter`, `.split`, `name18.replaceAll`, `spaced.toLowerCase`.

SHA-256 do trecho: `1f85c8edede4bf51876d0a637276866b8abcfecb40b921f52a6096d804ce41db`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
