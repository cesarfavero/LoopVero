# `createBrokeredCredentialTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-credential-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-credential-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751949-751980](../../../../../../../reference/runtime/host-main.cjs#L751949-L751980) | `FunctionDeclaration` | não | `access5, broker` |
| [evaluation:525015-525046](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525015-L525046) | `FunctionDeclaration` | não | `access4, broker` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751949-751980](../../../../../../../reference/runtime/host-main.cjs#L751949-L751980) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:525015-525046](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525015-L525046) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:751949

Chamadas escritas diretamente neste corpo: `defineCommunicateTool`.

SHA-256 do trecho: `c71a404ac878897eaa2b3fce1cb3524753d70cffc92b891d578bebdcbe462b38`.

### evaluation:525015

Chamadas escritas diretamente neste corpo: `defineCommunicateTool`.

SHA-256 do trecho: `3ad7202f5cd33b60cb796c7df60d7301e55e470ae42f24b6421ec421b2cb18da`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
