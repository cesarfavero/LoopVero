# `resolvesTo`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-snapshot-format.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742841-742847](../../../../../../reference/runtime/host-main.cjs#L742841-L742847) | `FunctionDeclaration` | não | `path33, url2, origin` |
| [evaluation:515503-515509](../../../../../../reference/runtime/sand-eval-runner.cjs#L515503-L515509) | `FunctionDeclaration` | não | `path33, url2, origin` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742841-742847](../../../../../../reference/runtime/host-main.cjs#L742841-L742847) | 0 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:515503-515509](../../../../../../reference/runtime/sand-eval-runner.cjs#L515503-L515509) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:742841

Chamadas escritas diretamente neste corpo: `new URL`.

SHA-256 do trecho: `ec1e98cc662ca34f13aea2beef2309c52f214265887851aaf65f2d5843d06ad9`.

### evaluation:515503

Chamadas escritas diretamente neste corpo: `new URL`.

SHA-256 do trecho: `ec1e98cc662ca34f13aea2beef2309c52f214265887851aaf65f2d5843d06ad9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
