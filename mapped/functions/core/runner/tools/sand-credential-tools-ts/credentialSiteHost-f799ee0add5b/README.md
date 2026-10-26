# `credentialSiteHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-credential-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-credential-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751799-751805](../../../../../../../reference/runtime/host-main.cjs#L751799-L751805) | `FunctionDeclaration` | não | `raw` |
| [evaluation:524865-524871](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524865-L524871) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751799-751805](../../../../../../../reference/runtime/host-main.cjs#L751799-L751805) | 1 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:524865-524871](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524865-L524871) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:751799

Chamadas escritas diretamente neste corpo: `new URL`, `raw.includes`.

SHA-256 do trecho: `6019a4bf7044f8789fcf6e939d1af3e36487b3e30273872445f3ec15e5b5d7b9`.

### evaluation:524865

Chamadas escritas diretamente neste corpo: `new URL`, `raw.includes`.

SHA-256 do trecho: `6019a4bf7044f8789fcf6e939d1af3e36487b3e30273872445f3ec15e5b5d7b9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
