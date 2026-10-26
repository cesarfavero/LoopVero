# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-timezone/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/box-timezone/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:506491-506504](../../../../../../../reference/runtime/host-main.cjs#L506491-L506504) | `ArrowFunctionExpression` | não | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506491-506504](../../../../../../../reference/runtime/host-main.cjs#L506491-L506504) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:506491

Chamadas escritas diretamente neste corpo: `context2.onStop`, `createBoxTimezoneApplier`, `createBoxTimezoneService`, `service.start`.

SHA-256 do trecho: `facf55c1aa231bef42ed88805d4fa9a3e853d2cdb5734b3cb3da310627276fa2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
