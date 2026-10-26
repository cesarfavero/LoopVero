# `preferredListedIndex`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727318-727321](../../../../../../../reference/runtime/host-main.cjs#L727318-L727321) | `FunctionDeclaration` | não | `matches, wanted` |
| [evaluation:561824-561827](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561824-L561827) | `FunctionDeclaration` | não | `matches, wanted` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727318-727321](../../../../../../../reference/runtime/host-main.cjs#L727318-L727321) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:561824-561827](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561824-L561827) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:727318

Chamadas escritas diretamente neste corpo: `matches.includes`.

SHA-256 do trecho: `cf475ad3598749547fbbb190fcbe014192b949fba1afca9ff97d96852ee92a1c`.

### evaluation:561824

Chamadas escritas diretamente neste corpo: `matches.includes`.

SHA-256 do trecho: `cf475ad3598749547fbbb190fcbe014192b949fba1afca9ff97d96852ee92a1c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
