# `createContextFromSpanContext`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/otel.js` · [README do módulo](../../../../modules/context/otel-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225837-225853](../../../../../reference/runtime/host-main.cjs#L225837-L225853) | `FunctionDeclaration` | não | `spanContext, name18, existingContext` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225837-225853](../../../../../reference/runtime/host-main.cjs#L225837-L225853) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:225837

Chamadas escritas diretamente neste corpo: `context.active`, `createContext`, `ctx.with`, `getTracer`, `parentCtx.withName`, `trace.setSpanContext`, `tracer.startSpan`.

SHA-256 do trecho: `69d81d37b42d6e15152febc1510396161aa3153e9f2e473e69a8f5a3c32dcad1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
