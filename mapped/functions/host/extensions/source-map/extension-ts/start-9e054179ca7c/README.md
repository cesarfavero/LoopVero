# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/source-map/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/source-map/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:728830-728839](../../../../../../../reference/runtime/host-main.cjs#L728830-L728839) | `ArrowFunctionExpression` | não | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728830-728839](../../../../../../../reference/runtime/host-main.cjs#L728830-L728839) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:728830 usa retorno implícito de arrow function.

### host:728830

Chamadas escritas diretamente neste corpo: `createSandDurableFileOwner`, `new SandSourceMap`.

SHA-256 do trecho: `a4fa61f97a7911891b7b611ab7845570f1831af32c619ef7824c037f864fcbdb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
