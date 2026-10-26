# `isSearchThreads`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/gmail-spam-visibility.ts` · [README do módulo](../../../../../modules/core/mcp/gmail-spam-visibility-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:584190-584193](../../../../../../reference/runtime/sand-eval-runner.cjs#L584190-L584193) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584190-584193](../../../../../../reference/runtime/sand-eval-runner.cjs#L584190-L584193) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:584190

Chamadas escritas diretamente neste corpo: `args.name.endsWith`.

SHA-256 do trecho: `34ecd582ecadddb8b5a1408314649073fc558247966ef7f9766a0b862d6fdb38`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
