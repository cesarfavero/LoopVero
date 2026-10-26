# `classifyLocalExecFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/local-exec/local-exec-failure-classifier.ts` · [README do módulo](../../../../../modules/shared/local-exec/local-exec-failure-classifier-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:226145-226150](../../../../../../reference/runtime/host-main.cjs#L226145-L226150) | `FunctionDeclaration` | não | `message` |
| [evaluation:479034-479039](../../../../../../reference/runtime/sand-eval-runner.cjs#L479034-L479039) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226145-226150](../../../../../../reference/runtime/host-main.cjs#L226145-L226150) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479034-479039](../../../../../../reference/runtime/sand-eval-runner.cjs#L479034-L479039) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:226145

Chamadas escritas diretamente neste corpo: `/\bspawn(?:Sync)?\b/i.test`, `ERRNO_TOKEN.exec`, `brandedErrno`, `spawnErrorClass`.

SHA-256 do trecho: `b158e9e8acc3404cc9b4860cb339b101105c7a315744f3c55466b52baffb1d37`.

### evaluation:479034

Chamadas escritas diretamente neste corpo: `/\bspawn(?:Sync)?\b/i.test`, `ERRNO_TOKEN.exec`, `brandedErrno`, `spawnErrorClass`.

SHA-256 do trecho: `b158e9e8acc3404cc9b4860cb339b101105c7a315744f3c55466b52baffb1d37`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
