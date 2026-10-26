# `originPrIdentityHostsFor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/origin-repo-reference.ts` · [README do módulo](../../../../../modules/core/cloud-agents/origin-repo-reference-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509090-509097](../../../../../../reference/runtime/host-main.cjs#L509090-L509097) | `FunctionDeclaration` | não | `readOriginPrIdentityHosts, callSite` |
| [evaluation:556843-556850](../../../../../../reference/runtime/sand-eval-runner.cjs#L556843-L556850) | `FunctionDeclaration` | não | `readOriginPrIdentityHosts, callSite` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509090-509097](../../../../../../reference/runtime/host-main.cjs#L509090-L509097) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:556843-556850](../../../../../../reference/runtime/sand-eval-runner.cjs#L556843-L556850) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:509090

Chamadas escritas diretamente neste corpo: `readOriginPrIdentityHosts`.

SHA-256 do trecho: `d0d1112f1aab3dffd09fc8a2865702730cf4ac2782538f24e90114e799df6efc`.

### evaluation:556843

Chamadas escritas diretamente neste corpo: `readOriginPrIdentityHosts`.

SHA-256 do trecho: `d0d1112f1aab3dffd09fc8a2865702730cf4ac2782538f24e90114e799df6efc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
