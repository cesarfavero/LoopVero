# `wasRefusedBeforeConnecting`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/ports/box.ts` · [README do módulo](../../../../../modules/core/ports/box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:475752-475761](../../../../../../reference/runtime/sand-eval-runner.cjs#L475752-L475761) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:475752-475761](../../../../../../reference/runtime/sand-eval-runner.cjs#L475752-L475761) | 1 | 1 | 0 | 2 | 0 | 0 |

### evaluation:475752

Chamadas escritas diretamente neste corpo: `REFUSED_BEFORE_CONNECTING_CODES.has`.

Alvos de atribuição ou incremento: `cause`, `depth`.

SHA-256 do trecho: `c258cace09cd6461c0e87fe7880dff00ca464df5992a5c44c49b6ac29c9eee69`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
