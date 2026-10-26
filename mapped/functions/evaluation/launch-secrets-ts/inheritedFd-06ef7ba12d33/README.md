# `inheritedFd`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/launch-secrets.ts` · [README do módulo](../../../../modules/evaluation/launch-secrets-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:630652-630658](../../../../../reference/runtime/sand-eval-runner.cjs#L630652-L630658) | `FunctionDeclaration` | não | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630652-630658](../../../../../reference/runtime/sand-eval-runner.cjs#L630652-L630658) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:630652

Chamadas escritas diretamente neste corpo: `/^\/(?:dev\/fd|proc\/self\/fd)\/(\d+)$/.exec`, `Number`, `Number.isInteger`.

SHA-256 do trecho: `43e69ab0a34443250149cc1d5381f6be947fe4f395ecbe34601a258322d12e8e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
