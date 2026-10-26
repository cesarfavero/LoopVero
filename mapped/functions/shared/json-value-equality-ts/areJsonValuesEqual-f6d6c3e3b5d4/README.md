# `areJsonValuesEqual`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `shared/json-value-equality.ts` · [README do módulo](../../../../modules/shared/json-value-equality-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552007-552021](../../../../../reference/runtime/host-main.cjs#L552007-L552021) | `FunctionDeclaration` | não | `a, b2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552007-552021](../../../../../reference/runtime/host-main.cjs#L552007-L552021) | 6 | 0 | 0 | 7 | 0 | 0 |

### host:552007

Chamadas escritas diretamente neste corpo: `.filter`, `Array.isArray`, `Object.is`, `Object.keys`, `a.every`, `hasPlainPrototype`, `isUnknownRecord2`, `keysA.every`.

SHA-256 do trecho: `f8a8127ec43a75d1af140495e13c706be5006fd4b7f50454e713f72a497b645e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
