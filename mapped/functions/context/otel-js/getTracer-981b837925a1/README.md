# `getTracer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/otel.js` · [README do módulo](../../../../modules/context/otel-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225788-225790](../../../../../reference/runtime/host-main.cjs#L225788-L225790) | `FunctionDeclaration` | não | `name18 = "context-tracer"` |
| [evaluation:2276-2278](../../../../../reference/runtime/sand-eval-runner.cjs#L2276-L2278) | `FunctionDeclaration` | não | `name18 = "context-tracer"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225788-225790](../../../../../reference/runtime/host-main.cjs#L225788-L225790) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:2276-2278](../../../../../reference/runtime/sand-eval-runner.cjs#L2276-L2278) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225788

Chamadas escritas diretamente neste corpo: `trace.getTracer`.

SHA-256 do trecho: `e210990b04e3de89dd1234863414ecc01c47b9ca91db03eea459aa03b7c8ccfe`.

### evaluation:2276

Chamadas escritas diretamente neste corpo: `trace.getTracer`.

SHA-256 do trecho: `e210990b04e3de89dd1234863414ecc01c47b9ca91db03eea459aa03b7c8ccfe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
