# `unregisteredConnectorNames`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:573853-573861](../../../../../../reference/runtime/sand-eval-runner.cjs#L573853-L573861) | `FunctionDeclaration` | não | `names3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:573853-573861](../../../../../../reference/runtime/sand-eval-runner.cjs#L573853-L573861) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:573853

Chamadas escritas diretamente neste corpo: `names3.flatMap`, `new Set`.

SHA-256 do trecho: `229dc27a7df524d8105ee637a5b631f16904627ca871a3d878c2f9022888d347`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
