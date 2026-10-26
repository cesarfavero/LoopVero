# `defaultDelay`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/host-lock.ts` · [README do módulo](../../../../modules/host/host-lock-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494223-494225](../../../../../reference/runtime/host-main.cjs#L494223-L494225) | `FunctionDeclaration` | não | `ms2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494223-494225](../../../../../reference/runtime/host-main.cjs#L494223-L494225) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494223

Chamadas escritas diretamente neste corpo: `new Promise`.

SHA-256 do trecho: `d4c4d392085c1d65a19e0eb2f93f43cceb4f325901b09f609a40ffd7176daf69`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
