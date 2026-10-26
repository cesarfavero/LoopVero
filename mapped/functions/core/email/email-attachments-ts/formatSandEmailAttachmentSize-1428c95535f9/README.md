# `formatSandEmailAttachmentSize`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/email/email-attachments.ts` · [README do módulo](../../../../../modules/core/email/email-attachments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734880-734884](../../../../../../reference/runtime/host-main.cjs#L734880-L734884) | `FunctionDeclaration` | não | `bytes` |
| [evaluation:539305-539309](../../../../../../reference/runtime/sand-eval-runner.cjs#L539305-L539309) | `FunctionDeclaration` | não | `bytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734880-734884](../../../../../../reference/runtime/host-main.cjs#L734880-L734884) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:539305-539309](../../../../../../reference/runtime/sand-eval-runner.cjs#L539305-L539309) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:734880

Chamadas escritas diretamente neste corpo: `.toFixed`.

SHA-256 do trecho: `66a0e2dbeb67602c94bf3c2965deb2c806a1a9d64603d5b9ac641955cbce14ae`.

### evaluation:539305

Chamadas escritas diretamente neste corpo: `.toFixed`.

SHA-256 do trecho: `66a0e2dbeb67602c94bf3c2965deb2c806a1a9d64603d5b9ac641955cbce14ae`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
