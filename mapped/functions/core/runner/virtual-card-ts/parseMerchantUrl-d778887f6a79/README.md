# `parseMerchantUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/virtual-card.ts` · [README do módulo](../../../../../modules/core/runner/virtual-card-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725621-725632](../../../../../../reference/runtime/host-main.cjs#L725621-L725632) | `FunctionDeclaration` | não | `raw` |
| [evaluation:538678-538689](../../../../../../reference/runtime/sand-eval-runner.cjs#L538678-L538689) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725621-725632](../../../../../../reference/runtime/host-main.cjs#L725621-L725632) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:538678-538689](../../../../../../reference/runtime/sand-eval-runner.cjs#L538678-L538689) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:725621

Chamadas escritas diretamente neste corpo: `new URL`, `parsed2.toString`.

Alvos de atribuição ou incremento: `parsed2`.

SHA-256 do trecho: `645be18ec8980a3a538c0630ba0e9660273741ef0e6eb48719bd8cc968151dba`.

### evaluation:538678

Chamadas escritas diretamente neste corpo: `new URL`, `parsed.toString`.

Alvos de atribuição ou incremento: `parsed`.

SHA-256 do trecho: `d5a02733a334d3819e5c21c3c8413ce803e0da02329c2c02e929aa219054d9ea`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
