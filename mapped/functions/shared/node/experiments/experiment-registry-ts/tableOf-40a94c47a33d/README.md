# `tableOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/experiment-registry.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/experiment-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:471128-471130](../../../../../../../reference/runtime/host-main.cjs#L471128-L471130) | `FunctionDeclaration` | não | `keys, build2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471128-471130](../../../../../../../reference/runtime/host-main.cjs#L471128-L471130) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:471128

Chamadas escritas diretamente neste corpo: `Object.fromEntries`, `keys.map`.

SHA-256 do trecho: `dc616b74893e5b8aaeaa1f6a0caa0f7126d258f6c8711a4d2bf5794b9ad03111`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
