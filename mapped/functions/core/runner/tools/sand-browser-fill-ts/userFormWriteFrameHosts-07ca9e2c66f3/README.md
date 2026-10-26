# `userFormWriteFrameHosts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727129-727137](../../../../../../../reference/runtime/host-main.cjs#L727129-L727137) | `FunctionDeclaration` | não | `consentedHost` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727129-727137](../../../../../../../reference/runtime/host-main.cjs#L727129-L727137) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:727129

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `consented.replace`, `consentedHost.trim`, `isLoopbackUserFormHost`.

SHA-256 do trecho: `b96c6f5f34fe7d7444034249d8874469e10771b48a05f783d0877caa1949e970`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
