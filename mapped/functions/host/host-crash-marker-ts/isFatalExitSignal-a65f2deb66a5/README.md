# `isFatalExitSignal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/host-crash-marker.ts` · [README do módulo](../../../../modules/host/host-crash-marker-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:471411-471413](../../../../../reference/runtime/host-main.cjs#L471411-L471413) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471411-471413](../../../../../reference/runtime/host-main.cjs#L471411-L471413) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:471411

Chamadas escritas diretamente neste corpo: `HOST_CRASH_EXIT_SIGNALS.some`.

SHA-256 do trecho: `a579204df3f2637fec7e722ffb7308b2bebdd6564954fe9f074e95df4e38241d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
