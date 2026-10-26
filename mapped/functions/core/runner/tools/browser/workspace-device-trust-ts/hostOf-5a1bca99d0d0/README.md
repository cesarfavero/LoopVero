# `hostOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/workspace-device-trust.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/workspace-device-trust-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743295-743297](../../../../../../../../reference/runtime/host-main.cjs#L743295-L743297) | `FunctionDeclaration` | não | `url2` |
| [evaluation:516146-516148](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516146-L516148) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743295-743297](../../../../../../../../reference/runtime/host-main.cjs#L743295-L743297) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:516146-516148](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516146-L516148) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:743295

Chamadas escritas diretamente neste corpo: `.replace`, `url2.hostname.toLowerCase`.

SHA-256 do trecho: `b946a311c0a339bbe3f4e9b0dd11e67ad5ee2e147a19c3d61830db7a8a5f4ba2`.

### evaluation:516146

Chamadas escritas diretamente neste corpo: `.replace`, `url2.hostname.toLowerCase`.

SHA-256 do trecho: `b946a311c0a339bbe3f4e9b0dd11e67ad5ee2e147a19c3d61830db7a8a5f4ba2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
