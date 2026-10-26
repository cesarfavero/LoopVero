# `parseEmailFromAddresses`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716263-716273](../../../../../../reference/runtime/host-main.cjs#L716263-L716273) | `FunctionDeclaration` | não | `raw` |
| [evaluation:527946-527956](../../../../../../reference/runtime/sand-eval-runner.cjs#L527946-L527956) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716263-716273](../../../../../../reference/runtime/host-main.cjs#L716263-L716273) | 4 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:527946-527956](../../../../../../reference/runtime/sand-eval-runner.cjs#L527946-L527956) | 4 | 1 | 0 | 2 | 0 | 0 |

### host:716263

Chamadas escritas diretamente neste corpo: `Array.isArray`, `addresses.includes`, `addresses.push`, `normalizeEmailAddress`.

SHA-256 do trecho: `036c9e3af5307f4e2fbdef43e69ec5a8d0d751b52be908459f0938f0af913028`.

### evaluation:527946

Chamadas escritas diretamente neste corpo: `Array.isArray`, `addresses.includes`, `addresses.push`, `normalizeEmailAddress`.

SHA-256 do trecho: `036c9e3af5307f4e2fbdef43e69ec5a8d0d751b52be908459f0938f0af913028`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
